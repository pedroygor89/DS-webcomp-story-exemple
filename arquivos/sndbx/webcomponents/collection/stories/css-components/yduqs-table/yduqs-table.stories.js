import { html } from 'lit-html';
export default {
  title: 'Componentes/Table',
  argTypes: {
    dark: {
      control: "boolean",
      name: "Dark"
    },
    border: {
      control: "boolean",
      name: "Borda interna",
    },
    leftFixed: {
      control: "boolean",
      name: "Coluna fixa",
    },
  },
};
const BasicTemplate = ({ dark, border, leftFixed }) => html `
<div class="container py-4 d-flex justify-content-around">

  <table class="c-table ${dark ? 'c-table--dark' : ''} ${border ? 'c-table--border' : ''} ${leftFixed ? 'c-table--fixed-left' : ''}">
    <thead class="c-table__thead" >
        <tr class="c-table__trow">
            <th class="c-table__theader--hidden"></th>
            <th class="c-table__theader">Header coluna 1</th>
            <th class="c-table__theader">Header coluna 2</th>
            <th class="c-table__theader">Header coluna 3</th>
            <th class="c-table__theader">Header coluna 4</th>
        </tr>
    </thead>
    <tbody class="c-table__tbody">
        <tr class="c-table__trow">
            <th class="c-table__theader">Header linha 1</th>
            <td class="c-table__tdata">Célula coluna 1 linha 1</td>
            <td class="c-table__tdata">Célula coluna 2 linha 1</td>
            <td class="c-table__tdata">Célula coluna 3 linha 1</td>
            <td class="c-table__tdata">Célula coluna 4 linha 1</td>
        </tr>
        <tr class="c-table__trow">
            <th class="c-table__theader">Header linha 2</th>
            <td class="c-table__tdata">Célula coluna 1 linha 2</td>
            <td class="c-table__tdata">Célula coluna 2 linha 2</td>
            <td class="c-table__tdata">Célula coluna 3 linha 2</td>
            <td class="c-table__tdata">Célula coluna 4 linha 2</td>
        </tr>
        <tr class="c-table__trow">
            <th class="c-table__theader">Header linha 3</th>
            <td class="c-table__tdata">Célula coluna 1 linha 3</td>
            <td class="c-table__tdata">Célula coluna 2 linha 3</td>
            <td class="c-table__tdata">Célula coluna 3 linha 3</td>
            <td class="c-table__tdata">Célula coluna 4 linha 3</td>
        </tr>
        <tr class="c-table__trow">
            <th class="c-table__theader">Header linha 4</th>
            <td class="c-table__tdata">Célula coluna 1 linha 4</td>
            <td class="c-table__tdata">Célula coluna 2 linha 4</td>
            <td class="c-table__tdata">Célula coluna 3 linha 4</td>
            <td class="c-table__tdata">Célula coluna 4 linha 4</td>
        </tr>
        <tr class="c-table__trow">
            <th class="c-table__theader">Header linha 5</th>
            <td class="c-table__tdata">Célula coluna 1 linha 5</td>
            <td class="c-table__tdata">Célula coluna 2 linha 5</td>
            <td class="c-table__tdata">Célula coluna 3 linha 5</td>
            <td class="c-table__tdata">Célula coluna 4 linha 5</td>
        </tr>
        <tr class="c-table__trow">
            <th class="c-table__theader">Header linha 6</th>
            <td class="c-table__tdata">Célula coluna 1 linha 6</td>
            <td class="c-table__tdata">Célula coluna 2 linha 6</td>
            <td class="c-table__tdata">Célula coluna 3 linha 6</td>
            <td class="c-table__tdata">Célula coluna 4 linha 6</td>
        </tr>
    </tbody>
  </table>

</div>
`;
export const Basic = BasicTemplate.bind({});
Basic.storyName = 'Default';
Basic.args = {};
const HalfTableTemplate = ({ dark, border, leftFixed }) => html `
<div class="container py-4 d-flex justify-content-around">

    <table class="c-table c-table c-table--half ${dark ? 'c-table--dark' : ''} ${border ? 'c-table--border' : ''} ${leftFixed ? 'c-table--fixed-left' : ''}">
        <thead class="c-table__thead">
            <tr class="c-table__trow">
                <th class="c-table__theader">Momentos no consumo</th>
                <th class="c-table__theader">Fórmula</th>
            </tr>
        </thead>
        <tbody class="c-table__tbody">
            <tr class="c-table__trow">
                <td class="c-table__tdata">Uma mudança inicial nos gastos do governo</td>
                <td class="c-table__tdata">ΔG</td>
            </tr>
            <tr class="c-table__trow">
                <td class="c-table__tdata">Célula coluna 1 linha 2</td>
                <td class="c-table__tdata">PMgC x ΔG</td>
            </tr>
            <tr class="c-table__trow">
                <td class="c-table__tdata">Célula coluna 1 linha 3</td>
                <td class="c-table__tdata">PMgC2 x ΔG</td>
            </tr>
            <tr class="c-table__trow">
                <td class="c-table__tdata">Célula coluna 1 linha 4</td>
                <td class="c-table__tdata">PMgC3 x ΔG</td>
            </tr>
        </tbody>
    </table>

</div>
`;
export const HalfTable = HalfTableTemplate.bind({});
HalfTable.storyName = '2 colunas';
HalfTable.args = {};
const HideColumnTemplate = ({ dark, border }) => html `
<div class="container py-4 d-flex justify-content-around">

    <table class="c-table c-table ${dark ? 'c-table--dark' : ''} ${border ? 'c-table--border' : ''}">
        <thead class="c-table__thead">
            <tr class="c-table__trow">
                <th class="c-table__theader--hidden"></th>
                <th class="c-table__theader">Header coluna 1</th>
                <th class="c-table__theader d-sm-none d-md-table-cell">Header coluna 2</th>
                <th class="c-table__theader d-sm-none d-lg-table-cell">Header coluna 3</th>
            </tr>
        </thead>
        <tbody class="c-table__tbody">
            <tr class="c-table__trow">
                <th class="c-table__theader">Header linha 1</th>
                <td class="c-table__tdata">Célula coluna 1 linha 1</td>
                <td class="c-table__tdata d-sm-none d-md-table-cell">Célula coluna 2 linha 1</td>
                <td class="c-table__tdata d-sm-none d-lg-table-cell">Célula coluna 3 linha 1</td>
            </tr>
            <tr class="c-table__trow">
                <th class="c-table__theader">Header linha 2</th>
                <td class="c-table__tdata">Célula coluna 1 linha 2</td>
                <td class="c-table__tdata d-sm-none d-md-table-cell">Célula coluna 2 linha 2</td>
                <td class="c-table__tdata d-sm-none d-lg-table-cell">Célula coluna 3 linha 2</td>
            </tr>
            <tr class="c-table__trow">
                <th class="c-table__theader">Header linha 3</th>
                <td class="c-table__tdata">Célula coluna 1 linha 3</td>
                <td class="c-table__tdata d-sm-none d-md-table-cell">Célula coluna 2 linha 3</td>
                <td class="c-table__tdata d-sm-none d-lg-table-cell">Célula coluna 3 linha 3</td>
            </tr>
            <tr class="c-table__trow">
                <th class="c-table__theader">Header linha 4</th>
                <td class="c-table__tdata">Célula coluna 1 linha 4</td>
                <td class="c-table__tdata d-sm-none d-md-table-cell">Célula coluna 2 linha 4</td>
                <td class="c-table__tdata d-sm-none d-lg-table-cell">Célula coluna 3 linha 4</td>
            </tr>
            <tr class="c-table__trow">
                <th class="c-table__theader">Header linha 5</th>
                <td class="c-table__tdata">Célula coluna 1 linha 5</td>
                <td class="c-table__tdata d-sm-none d-md-table-cell">Célula coluna 2 linha 5</td>
                <td class="c-table__tdata d-sm-none d-lg-table-cell">Célula coluna 3 linha 5</td>
            </tr>
            <tr class="c-table__trow">
                <th class="c-table__theader">Header linha 6</th>
                <td class="c-table__tdata">Célula coluna 1 linha 6</td>
                <td class="c-table__tdata d-sm-none d-md-table-cell">Célula coluna 2 linha 6</td>
                <td class="c-table__tdata d-sm-none d-lg-table-cell">Célula coluna 3 linha 6</td>
            </tr>
        </tbody>
    </table>

</div>
`;
export const HideColumn = HideColumnTemplate.bind({});
HideColumn.storyName = 'Colunas escondidas';
HideColumn.args = {};
const UnlimitedTemplate = ({ dark, border, leftFixed }) => html `
    <div class="container py-4 d-flex justify-content-around">
        <button id="btn_row" class="c-button c-button--ghost">Adicionar linha</button>
        <button id="btn_col" class="c-button c-button--ghost">Adicionar coluna</button>
    </div>

    <div class="container py-4 text-center">

        <table class="c-table c-table ${dark ? 'c-table--dark' : ''} ${border ? 'c-table--border' : ''} ${leftFixed ? 'c-table--fixed-left' : ''}">
            <thead class="c-table__thead" >
                <tr class="c-table__trow" id="table__thead__trow">
                    <th class="c-table__theader--hidden"></th>
                    <th class="c-table__theader">Header coluna 1</th>
                    <th class="c-table__theader">Header coluna 2</th>
                    <th class="c-table__theader">Header coluna 3</th>
                </tr>
            </thead>
            <tbody class="c-table__tbody" id="table__tbody">
                <tr class="c-table__trow">
                    <th class="c-table__theader">Header linha 1</th>
                    <td class="c-table__tdata">Célula coluna 1 linha 1</td>
                    <td class="c-table__tdata">Célula coluna 2 linha 1</td>
                    <td class="c-table__tdata">Célula coluna 3 linha 1</td>
                </tr>
                <tr class="c-table__trow">
                    <th class="c-table__theader">Header linha 2</th>
                    <td class="c-table__tdata">Célula coluna 1 linha 2</td>
                    <td class="c-table__tdata">Célula coluna 2 linha 2</td>
                    <td class="c-table__tdata">Célula coluna 3 linha 2</td>
                </tr>
                <tr class="c-table__trow">
                    <th class="c-table__theader">Header linha 3</th>
                    <td class="c-table__tdata">Célula coluna 1 linha 3</td>
                    <td class="c-table__tdata">Célula coluna 2 linha 3</td>
                    <td class="c-table__tdata">Célula coluna 3 linha 3</td>
                </tr>
                <tr class="c-table__trow">
                    <th class="c-table__theader">Header linha 4</th>
                    <td class="c-table__tdata">Célula coluna 1 linha 4</td>
                    <td class="c-table__tdata">Célula coluna 2 linha 4</td>
                    <td class="c-table__tdata">Célula coluna 3 linha 4</td>
                </tr>
                <tr class="c-table__trow">
                    <th class="c-table__theader">Header linha 5</th>
                    <td class="c-table__tdata">Célula coluna 1 linha 5</td>
                    <td class="c-table__tdata">Célula coluna 2 linha 5</td>
                    <td class="c-table__tdata">Célula coluna 3 linha 5</td>
                </tr>
                <tr class="c-table__trow" id="clonable">
                    <th class="c-table__theader">Header</th>
                    <td class="c-table__tdata">Célula de exemplo</td>
                    <td class="c-table__tdata">Célula de exemplo</td>
                    <td class="c-table__tdata">Célula de exemplo</td>
                </tr>
            </tbody>
        </table>

    </div>

    <script>
        var btn = document.getElementById('bnt_add');
        var thead = document.getElementById("table__thead__trow");
        var tbody = document.getElementById("table__tbody");
        var row = document.getElementById("clonable");

        function cloneRow() {
            var clone = row.cloneNode(true);
            tbody.appendChild(clone);
        }
        
        function cloneColumn() {
            var th = document.createElement("th");
            th.className = "c-table__theader";
            th.innerText = "Header";
            thead.appendChild(th);

            for (var i = 0, row; row = tbody.rows[i]; i++) {
                var td = document.createElement("td");
                td.className = "c-table__tdata";
                td.innerText = "Célula de exemplo";
                row.appendChild(td);
            }
        }

        btn_row.addEventListener('click', function(){
            cloneRow();
        });

        btn_col.addEventListener('click', function(){
            cloneColumn();
        });
    </script>
`;
export const Unlimited = UnlimitedTemplate.bind({});
Unlimited.storyName = 'Tabela ilimitada';
Unlimited.args = {};
