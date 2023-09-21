export default function ListItem({ item }) {
  return ( 
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.unit}</td>
    </tr>
  );
}
