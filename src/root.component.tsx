export default function Root(props) {
  return (
    <section className="bg-blue-500 w-full h-96 text-white flex items-center justify-center">
      {props.name} is mounted!
    </section>
  );
}
