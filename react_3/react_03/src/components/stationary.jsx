function Stationary({items}) {
  return (
    <div>
        {
            items.map((item) => { // using this we can iterate each element one by one.
                return(
                    <h1>{item}</h1>
                )
            })
        }
    </div>
  );
}

export default Stationary;