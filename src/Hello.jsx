import './Hello.css';
export default function Hello({name,surname = "hee hee haa haa"}){
    return (
    <>
      <h1>Hello World {name}{surname}</h1>
    </>);
}