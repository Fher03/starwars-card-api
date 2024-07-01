import Characters from "@/components/Characters";

function page({ params }) {
  console.log(params);
  return (
    <div>
      <Characters id={params.id} />
    </div>
  );
}

export default page;
