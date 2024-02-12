import Details from "@/components/pages/- details";

// searchParams is here
const Page = ({ params }: { params: Array<string> }) => {
  // params[0] => id
  // params[1] => symboleView
  return (
    <>
      <Details id={params[0]} />
    </>
  );
};
export default Page;
