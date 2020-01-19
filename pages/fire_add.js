import Link from 'next/link';
import Layout from '../components/Layout'
import Fireadd from '../components/Fireadd'

export default () => <div>
    <Layout header="Other" title="他のページです。">
        <Fireadd></Fireadd>
        <div>
            <Link href="/">
                <button>トップへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>