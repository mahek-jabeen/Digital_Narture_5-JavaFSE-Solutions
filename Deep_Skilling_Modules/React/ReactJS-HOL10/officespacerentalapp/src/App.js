import "./App.css";

function App() {

  const offices = [
    {
      id: 1,
      name: "DBS Business Center",
      rent: 55000,
      address: "Banjara Hills, Hyderabad",
      image: "/office1.jpeg"
    },
    {
      id: 2,
      name: "Tech Park Workspace",
      rent: 75000,
      address: "Hitech City, Hyderabad",
      image: "/office2.jpeg"
    },
    {
      id: 3,
      name: "Elite Office Hub",
      rent: 45000,
      address: "Gachibowli, Hyderabad",
      image: "/office1.jpeg"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      {
        offices.map((office) => (

          <div className="card" key={office.id}>

            <img
              src={office.image}
              alt={office.name}
              width="400"
              height="250"
            />

            <h2>Name : {office.name}</h2>

            <h3
              style={{
                color: office.rent < 60000 ? "red" : "green"
              }}
            >
              Rent : ₹{office.rent}
            </h3>

            <h3>Address : {office.address}</h3>

            <hr />

          </div>

        ))
      }

    </div>
  );
}

export default App;