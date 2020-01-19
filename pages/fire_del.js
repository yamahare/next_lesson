import Link from 'next/link';
import Layout from '../components/Layout'
import Firedelete from '../components/Firedelete'

export default () => <div>
    <Layout header="Other" title="他のページです。">
        <Firedelete></Firedelete>
        <div>
            <Link href="/">
                <button>トップへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>