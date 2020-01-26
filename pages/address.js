import Link from 'next/link';
import Layout from '../components/Layout'
import Address from '../components/Address'

export default () => <div>
    <Layout header="Address" title="address book">
        <Address />
        <Link href="/address_add">
            <button>add</button>
        </Link>
        <div>
            <Link href="/">
                <button>トップへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>
