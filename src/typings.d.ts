/*
 * Custom Type Definitions
 * When including 3rd party modules you also need to include the type definition for the module
 * if they don't provide one within the module. You can try to install it with typings
typings install node --save
 * If you can't find the type definition in the registry we can make an ambient definition in
 * this file for now. For example
declare module "my-module" {
  export function doesSomething(value: string): string;
}
 *
 * If you're prototying and you will fix the types later you can also declare it as type any
 *
declare var assert: any;
 *
 * If you're importing a module that uses Node.js modules which are CommonJS you need to import as
 *
import * as _ from 'lodash'
 * You can include your type definitions in this file until you create one for the typings registry
 * see https://github.com/typings/registry
 *
 */

declare namespace jasmine {
  interface Matchers {
    toMatchAuthConfigurations;
  }
}


interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(dependencies?: string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}
interface WebpackRequire extends NodeRequireFunction {
  context(file: string, flag?: boolean, exp?: RegExp): any;
}

// Extend typings
interface NodeRequire extends WebpackRequire {}
interface NodeModule extends WebpackModule {}


interface WebpackConfig {
  cache?: boolean;
  target?: string;
  devtool?: string;
  entry: Array<string> | Object;
  output: any;
  module?: {
    loaders?: Array<any>
  };
  plugins?: Array<any>;
  resolve?: {
    modules?: Array<string>;
    descriptionFiles?: Array<string>;
    mainFields?: Array<string>;
    aliasFields?: Array<string>;
    extensions?: Array<string>;
    enforceExtension?: boolean;
    moduleExtensions?: Array<string>;
    enforceModuleExtension?: boolean;
    alias?: { [key: string]: string };
  };
  devServer?: {
    contentBase?: string;
    port?: number;
    historyApiFallback?: boolean;
    hot?: boolean;
    inline?: boolean;
  };
  node?: {
    process?: boolean;
    global?: boolean;
    Buffer?: boolean;
    crypto?: string | boolean;
    module?: boolean;
    clearImmediate?: boolean;
    setImmediate?: boolean
    clearTimeout?: boolean;
    setTimeout?: boolean
  };
}
