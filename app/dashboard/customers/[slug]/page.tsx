import Image from 'next/image';

import noProfile from '@/assets/images/no_profile.png';

import { getData } from '@/lib/customers/data';
import UpdateForm from '@/ui/dashboard/customers/updateForm';

type Props = {
  params: {
    slug: string;
  };
};
const Page = async ({ params }: Props) => {
  const { slug } = params;
  const data = await getData(slug);

  if(!data) return <div className='w-full text-center'>Nessun cliente trovato</div>

  return (
    <div className="flex gap-8">
      <div className="bg-gray-light p-5 rounded font-bold test-test-light">
        <div className="w-full h-20 relative rounded overflow-hidden mb-5">
          <Image src={noProfile} alt="User image" fill />
        </div>
        {data.name} {data.surname}
      </div>
      <div className="flex-grow bg-gray-light p-5 rounded">
        <UpdateForm data={data} />
      </div>
    </div>
  );
};

export default Page;
