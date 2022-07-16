import { html } from 'lit-html';
export default {
  title: 'Componentes/Grid'
};
const BasicTemplate = () => html `
<style>
  .u-bg-white {
    background: #fff;
  }
  .u-bg-accent-default {
    background: #007e9e;
  }
  .u-bg-accent-light {
    background: #00a3cc;
  }
  .u-bg-accent-dark {
    background: #005266;
  }
</style>
<div class="container u-bg-white">
  <h2>Grid simples</h2>
  <div class="row">
    <div class="col-sm u-bg-accent-default">
      Coluna 1 de 3
    </div>
    <div class="col-sm u-bg-accent-light">
      Coluna 1 de 3
    </div>
    <div class="col-sm u-bg-accent-default">
      Coluna 1 de 3
    </div>
  </div>
</div>
`;
export const Basic = BasicTemplate.bind({});
Basic.storyName = 'Basic';
const AutoLayoutTemplate = () => html `
<style>
  .u-bg-white {
    background: #fff;
  }
  .u-bg-accent-default {
    background: #007e9e;
  }
  .u-bg-accent-light {
    background: #00a3cc;
  }
  .u-bg-accent-dark {
    background: #005266;
  }
</style>
<div class="container u-bg-white">
  <h2>Grid com layout auto-adaptativo</h2>

  <div class="container">
    <h3>Largura das colunas iguais</h3>
    <div class="row">
      <div class="col u-bg-accent-default">
        Coluna 1 de 2
      </div>
      <div class="col u-bg-accent-light">
        Coluna 1 de 2
      </div>
    </div>
    <div class="row">
      <div class="col u-bg-accent-default">
        Coluna 1 de 3
      </div>
      <div class="col u-bg-accent-light">
        Coluna 1 de 3
      </div>
      <div class="col u-bg-accent-dark">
        Coluna 1 de 3
      </div>
    </div>
  </div>

  <div class="container">
    <h3>Definindo uma coluna diferente</h3>
    <div class="row">
      <div class="col u-bg-accent-dark">
        1 de 3
      </div>
      <div class="col-6 u-bg-accent-default">
        2 de 3 (maior)
      </div>
      <div class="col u-bg-accent-dark">
        3 de 3
      </div>
    </div>
    <div class="row">
      <div class="col u-bg-accent-light">
        1 de 3
      </div>
      <div class="col-5 u-bg-accent-dark">
        2 de 3 (maior)
      </div>
      <div class="col u-bg-accent-light">
        3 de 3
      </div>
    </div>
  </div>

  <div class="container">
    <h3>Tamanho da coluna variável de acordo com a largura do conteúdo</h3>
    <div class="row justify-content-md-center">
      <div class="col col-lg-2 u-bg-accent-default">
        1 de 3
      </div>
      <div class="col-md-auto u-bg-accent-light">
        Conteúdo de tamanho variável
      </div>
      <div class="col col-lg-2 u-bg-accent-dark">
        3 de 3
      </div>
    </div>
    <div class="row">
      <div class="col u-bg-accent-light">
        1 de 3
      </div>
      <div class="col-md-auto u-bg-accent-dark">
        Conteúdo de tamanho variável
      </div>
      <div class="col col-lg-2 u-bg-accent-default">
        3 de 3
      </div>
    </div>
  </div>
</div>
`;
export const AutoLayout = AutoLayoutTemplate.bind({});
AutoLayout.storyName = 'AutoLayout';
const ResponsiveTemplate = () => html `
<style>
  .u-bg-white {
    background: #fff;
  }
  .u-bg-accent-default {
    background: #007e9e;
  }
  .u-bg-accent-light {
    background: #00a3cc;
  }
  .u-bg-accent-dark {
    background: #005266;
  }
</style>
<div class="container u-bg-white">
  <h2>Responvidade</h2>

  <div class="container">
    <h3>Breakpoints</h3>
    <div class="row">
      <div class="col u-bg-accent-default">col</div>
      <div class="col u-bg-accent-dark">col</div>
      <div class="col u-bg-accent-default">col</div>
      <div class="col u-bg-accent-light">col</div>
    </div>
    <div class="row">
      <div class="col-8 u-bg-accent-dark">col-8</div>
      <div class="col-4 u-bg-accent-default">col-4</div>
    </div>
  </div>

  <div class="container">
    <h3>Conteúdo empilhado na horizontal</h3>
    <div class="row">
      <div class="col-sm-8 u-bg-accent-light">col-sm-8</div>
      <div class="col-sm-4 u-bg-accent-default">col-sm-4</div>
    </div>
    <div class="row">
      <div class="col-sm u-bg-accent-dark">col-sm</div>
      <div class="col-sm u-bg-accent-default">col-sm</div>
      <div class="col-sm u-bg-accent-light">col-sm</div>
    </div>
  </div>

  <div class="container">
    <h3>Colunas com múltiplos tamanhos definidos por breakpoint</h3>
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="row">
      <div class="col-md-8 u-bg-accent-light">.col-md-8</div>
      <div class="col-6 col-md-4 u-bg-accent-default">.col-6 .col-md-4</div>
    </div>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <div class="row">
      <div class="col-6 col-md-4 u-bg-accent-dark">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4 u-bg-accent-default">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4 u-bg-accent-dark">.col-6 .col-md-4</div>
    </div>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <div class="row">
      <div class="col-6 u-bg-accent-light">.col-6</div>
      <div class="col-6 u-bg-accent-dark">.col-6</div>
    </div>
  </div>
</div>
`;
export const Responsive = ResponsiveTemplate.bind({});
Responsive.storyName = 'Responsive';
const NestedTemplate = () => html `
<style>
  .u-bg-white {
    background: #fff;
  }
  .u-bg-accent-default {
    background: #007e9e;
  }
  .u-bg-accent-light {
    background: #00a3cc;
  }
  .u-bg-accent-dark {
    background: #005266;
  }
</style>
<div class="container u-bg-white">
  <h2>Responvidade</h2>

  <div class="container">
    <h3>Breakpoints</h3>
    <div class="row row-cols-3">
      <div class="col u-bg-accent-default">Column</div>
      <div class="col u-bg-accent-dark">Column</div>
      <div class="col u-bg-accent-default">Column</div>
      <div class="col u-bg-accent-dark">Column</div>
    </div>
  </div>

  <div class="container">
    <h3>Breakpoints</h3>
    <div class="row row-cols-2">
      <div class="col u-bg-accent-dark">Column</div>
      <div class="col u-bg-accent-light">Column</div>
      <div class="col u-bg-accent-dark">Column</div>
      <div class="col u-bg-accent-light">Column</div>
    </div>
  </div>

  <div class="container">
    <h3>Breakpoints</h3>
    <div class="row row-cols-auto">
      <div class="col u-bg-accent-default">Column</div>
      <div class="col u-bg-accent-light">Column</div>
      <div class="col u-bg-accent-default">Column</div>
      <div class="col u-bg-accent-light">Column</div>
    </div>
  </div>

  <div class="container">
    <div class="row row-cols-4">
      <div class="col u-bg-accent-dark">Column</div>
      <div class="col u-bg-accent-default">Column</div>
      <div class="col u-bg-accent-dark">Column</div>
      <div class="col u-bg-accent-default">Column</div>
    </div>
  </div>

  <div class="container">
    <div class="row row-cols-4">
      <div class="col u-bg-accent-light">Column</div>
      <div class="col u-bg-accent-default">Column</div>
      <div class="col-6 u-bg-accent-light">Column</div>
      <div class="col u-bg-accent-default">Column</div>
    </div>
  </div>

  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="col u-bg-accent-default">Column</div>
      <div class="col u-bg-accent-dark">Column</div>
      <div class="col u-bg-accent-default">Column</div>
      <div class="col u-bg-accent-dark">Column</div>
    </div>
  </div>
</div>
`;
export const Nested = NestedTemplate.bind({});
Nested.storyName = 'Nested';
