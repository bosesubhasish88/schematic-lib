import { Rule, SchematicContext, Tree, branchAndMerge } from '@angular-devkit/schematics';
import { addDeclarationToAppModule } from './add-declaration-to-module.rule';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngAdd(options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    console.log('options', options);

    // Hardcoded path for the sake of simplicity
    const appModule = './src/app/app.module.ts';
    
    const  importedModuleList = (options.importedModuleList.length <= 0) ? ['LiquidThemeModule'] : options.importedModuleList; // load default module list;
    if(!options.doAutoSetup) {
      return tree;
    }
    importedModuleList.forEach(eachModule => {

      const rule = branchAndMerge(addDeclarationToAppModule(appModule, eachModule));
      return rule(tree, _context);
    });
    // return tree;
    // const rule = branchAndMerge(addDeclarationToAppModule(appModule, 'LiquidThemeModule'));
    // return rule(tree, _context);
  };

}
