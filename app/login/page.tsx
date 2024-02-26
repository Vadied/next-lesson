import Link from 'next/link';
import { LoginForm } from '@/ui';
import { register } from '@/assets/constants/navigation';

const Page = async () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-4'>
      <h1 className="text-xl text-center">Fai qui il tuo login</h1>
      <div className="bg-gray-light rounded p-10">
        <LoginForm />
        {/* <div className="flex flex-col items-end text-sm">
          <p>Non sei registrato?</p>
          <Link href={register.href} className="text-link hover:text-white">
            Registrati qui
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
