import { Link, useParams } from 'react-router';

function SantriDetail() {
    const { santri_id } = useParams();

    return (
        <div>
            <header className='flex flex-col gap-1'>
                <Link
                    to='/admin/santri/list'
                    className='text-[10px] text-gray-500'>
                    Kembali ke sebelumnya
                </Link>
                <p className='text-[10px]'>Detail santri dengan id : {santri_id}</p>
            </header>
        </div>
    );
}

export default SantriDetail;
