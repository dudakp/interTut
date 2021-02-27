const config = (plop) => {
  plop.setGenerator('component', {
    description: 'Generate react component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'type component name',
      },
      {
        type: 'input',
        name: 'moduleName',
        message: 'type module name',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          'src/{{camelCase moduleName}}/components/{{camelCase componentName}}/{{properCase componentName}}.tsx',
        templateFile: 'plopTemplates/componentTemplate.hbs',
        // additional data for template
        data: {},
      },
      {
        type: 'add',
        path:
          'src/{{camelCase moduleName}}/components/{{camelCase componentName}}/{{properCase componentName}}Styles.ts',
      },
      {
        type: 'add',
        path:
          'src/{{camelCase moduleName}}/components/{{camelCase componentName}}/{{properCase componentName}}.types.tsx',
        templateFile: 'plopTemplates/componentTypesTemplate.hbs',
        // additional data for template
        data: {},
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Generate react page component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'type component name',
      },
      {
        type: 'input',
        name: 'moduleName',
        message: 'type module name',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          'src/{{camelCase moduleName}}/pages/{{camelCase componentName}}/{{properCase componentName}}.tsx',
        templateFile: 'plopTemplates/componentTemplate.hbs',
        // additional data for template
        data: {},
      },
      {
        type: 'add',
        path:
          'src/{{camelCase moduleName}}/pages/{{camelCase componentName}}/{{properCase componentName}}Styles.ts',
      },
      {
        type: 'add',
        path:
          'src/{{camelCase moduleName}}/pages/{{camelCase componentName}}/{{properCase componentName}}.types.tsx',
        templateFile: 'plopTemplates/componentTypesTemplate.hbs',
        // additional data for template
        data: {},
      },
    ],
  });
};

module.exports = config;
