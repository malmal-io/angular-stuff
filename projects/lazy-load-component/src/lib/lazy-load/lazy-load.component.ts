import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Compiler,
  Component,
  Inject,
  Injector,
  Input,
  NgModuleFactory,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ModuleInfo} from '../module-info';
import {ResolveComponent} from '../resolve-component';
import {LAZY_LOAD_COMPONENT_REGISTRY} from '../constants';

export interface InputsType {
  [k: string]: any;
}
export interface OutputsType {
  [k: string]: () => {};
}

@Component({
  selector: 'mm-lazy',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyLoadComponent implements AfterViewInit {

  @ViewChild('lazyContainer', {static: true, read: ViewContainerRef})
  container: ViewContainerRef;

  @Input()
  id: string;

  @Input() inputs: InputsType;
  @Input() outputs: OutputsType;

  component;

  constructor(@Inject(LAZY_LOAD_COMPONENT_REGISTRY) private registry: ModuleInfo[],
              private compiler: Compiler,
              private injector: Injector,
              private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.loadFeature();
  }

  loadFeature() {

    const moduleInfo = this.registry.find(({id}) => id === this.id);

    // Dynamic import, activate code splitting and on demand loading of feature module
    moduleInfo.loadComponent().then((Module) => {
      // Compile the module
      this.compiler.compileModuleAsync(Module).then((moduleFactory: NgModuleFactory<any> & ResolveComponent) => {
        // Create a moduleRef, resolve an entry component, create the component
        const moduleRef = moduleFactory.create(this.injector);
        this.component = moduleRef.instance.resolveComponent();
        this.cdr.markForCheck();
      });
    });
  }

}
