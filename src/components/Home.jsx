import Hero from "./Hero";

function Home() {
  return (
    <> 
       <h1 style={{ color: "red" }}>HOME PAGE</h1>

      <Hero />
      <div className="temp">
        <h1>This is Home</h1>
        <p>Welcome! Glad you're here.</p>
      </div>
    </>
  );
}

export default Home;
