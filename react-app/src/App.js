import FilteredList from "./FilteredList";
function App() {

  let data = [
    {
        "id":0,
        "name": "Gesù di Nazareth",
        "age":33
    },
    {
        "id":1,
        "name": "Annibale Ricci",
        "age":30
    },
    {
        "id":2,
        "name": "Demetria Bellucci",
        "age":71
    },

    {
        "id":3,
        "name": "Quinto Mazzi",
        "age":15
    },

    {
        "id":4,
        "name": "Gioele Trevisan",
        "age":3
    },

    {
        "id":5,
        "name": "Gianleone Siciliano",
        "age":19
    },
    

    {
        "id":6,
        "name": "Sonia Olivetti",
        "age":46
    },

    {
        "id":7,
        "name": "Panfilo Marzorati",
        "age":62
    },

    {
        "id":8,
        "name": "Fiorenzo Cesaroni",
        "age":72
    },

    {
        "id":9,
        "name": "Liana Castiglione",
        "age":6
    },

    {
        "id":10,
        "name": "Guido Monicelli",
        "age":24
    },

    {
        "id":11,
        "name": "Ezio Soderini",
        "age":94
    },

    {
        "id":12,
        "name": "Ruggiero Fo",
        "age":16
    },

    {
        "id":13,
        "name": "Girolamo Tolentino",
        "age":33
    },

    {
        "id":14,
        "name": "Rosario Mastandrea",
        "age":11
    },

    {
        "id":15,
        "name": "Valeria Tanzini",
        "age":13
    },

    {
        "id":16,
        "name": "Vincenza Pagliaro",
        "age":55
    },

    {
        "id":17,
        "name": "Elmo Dulbecco",
        "age":73
    },

    {
        "id":18,
        "name": "Elena Busoni",
        "age":18
    },

    {
        "id":19,
        "name": "Ranieri Serlupi",
        "age":49
    },

    {
        "id":20,
        "name": "Marcantonio Campano",
        "age":38
    }

]
  return (
    <div className="App">
      <FilteredList list={data}/>
    </div>
  );
}

export default App;
