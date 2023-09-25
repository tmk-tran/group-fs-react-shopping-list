

export default function Edit({current, list, setList}) {
    function handleInput(e) {
      const newList = list.map(div =>
        div.id === current.id ? { ...div,[e.target.name]: e.target.value } : div
      );
      setList(newList);
    }
  
    return (
      <>
        <input type="text" name="item" value={current.item} onChange={handleInput} />
        <br />
        <input type="number" name="qty" value={current.qty} onChange={handleInput} />
        <br />
        <button type="submit">Update</button>
      </>
    );
  }