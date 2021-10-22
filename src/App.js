import './App.css';
import DataTable from 'react-data-table-component';
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';


const columns = [
  {
    name: 'Nome',
    selector: row => row.name,
  },
  {
    name: 'Email',
    selector: row => row.email,
  },
  {
    name: 'Telefone',
    selector: row => row.phone,
  },
];

const data = [
  {
    id: 1,
    name: 'Eduardo Osvaldo Victor Ferreira',
    email: 'eduardoosvaldovictorferreira_@glaudeimar.com.br',
    phone: '(21) 98445-2320'
  },
  {
    id: 2,
    name: 'Louise Sônia Campos',
    email: 'louisesoniacampos..louisesoniacampos@victorseguros.com.br',
    phone: '(98) 98656-8675'
  },
  {
    id: 3,
    name: 'Tiago Lorenzo Otávio Dias',
    email: 'tiagolorenzootaviodias-89@bravo.com.br',
    phone: '(82) 99841-4072'
  },
  {
    id: 4,
    name: 'Geraldo Daniel Melo',
    email: 'ggeraldodanielmelo@boll.com.br',
    phone: '(21) 99908-5441'
  },
  {
    id: 5,
    name: 'Enrico Bruno Assis',
    email: 'enricobrunoassis..enricobrunoassis@zaniniengenharia.com.br',
    phone: '(92) 99328-2828'
  },
  {
    id: 6,
    name: 'Elisa Ester Silveira',
    email: 'elisaestersilveira-74@comprehense.com.br',
    phone: '(61) 99605-8466'
  },
  {
    id: 7,
    name: 'Joana Vitoria Silveira',
    email: 'joanavitoria-74@santaclara.com.br',
    phone: '(61) 99505-7426'
  },
  {
    id: 8,
    name: 'Carlos dos Santos',
    email: 'carlosdossantos@google.com.br',
    phone: '(41) 99508-7271'
  },
  {
    id: 9,
    name: 'José da Silveira',
    email: 'josesilveira@hd.com.br',
    phone: '(51) 94949-9198'
  },

]

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // Altura da linha
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // padding das colunas do cabeçalho
      paddingRight: '8px',
      backgroundColor: '#86cad6',
      fontSize: '21px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // padding das colunas 
      paddingRight: '8px',
      backgroundColor: '#F0FAFA',
      fontSize: '16px',
    },
  },
};

const convertDataToPDFMake = () => {
    const dataToPDF = data.map((d) => {
        return [d.name, d.email, d.phone]
    });
    dataToPDF.unshift([{ text: 'Name', bold: true }, { text: 'Email', bold: true }, { text: 'Telefone', bold: true }]);
    return dataToPDF;
}


var docDefinition = {
	content: [
		{
			table: {
				body: convertDataToPDFMake()
			}
		},
	],
	styles: {
		tableExample: {
			margin: [0, 5, 0, 15]
		},
		
	},
}

function App() {
    const {vfs} = vfsFonts.pdfMake;
	pdfMake.vfs = vfs;

  const downloadPDF = (value) => {
    console.log(convertDataToPDFMake());
    pdfMake.createPdf(docDefinition).download('teste.pdf');

  };

  return (
    <div className="tableWrapper">
      <div className='header'>
        <div className='buttonDiv'>
          <button onClick={e => downloadPDF(e.target.value)}>Export to PDF</button>
        </div>
        <div className='titleDiv'>
          <label className='title'>Pessoas</label>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
    </div>
  );
}

export default App;
