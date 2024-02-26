import CreateForm from '@/ui/dashboard/customers/createForm';

const Page = async () => {
  return (
    <div className="bg-gray-light">
      <div className="p-5 rounded font-bold test-test-light w-full">
        New customer
      </div>
      <div className="flex-grow p-5 rounded">
        <CreateForm />
      </div>
    </div>
  );
};

export default Page;
