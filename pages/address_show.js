import Link from 'next/link';
import Layout from '../components/Layout'
import AddressShow from '../components/AddressShow';
import firebase from 'firebase';

export default () => <div>
    <Layout header="Address" title="address book">
        <AddressShow />
        <div>
            <Link href="/address">
                <button>Addressへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>
