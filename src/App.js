import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  const contactsData = Object.values(contacts);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="mainContent">
          {contactsData.map((item, index) => {
            console.log(item);
            return (
              <Contact
                key={index}
                img={item.photo}
                nama={item.name}
                phone={item.phone}
                email={item.email}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
