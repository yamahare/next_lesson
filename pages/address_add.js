import Link from 'next/link';
import Layout from '../components/Layout'
import AddressAdd from '../components/AddressAdd';

export default () => <div>
    <Layout header="Address" title="address create">
        <AddressAdd />
        <div>
            <Link href="/address">
                <button>Addressへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>
