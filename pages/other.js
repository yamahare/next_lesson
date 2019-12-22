import Link from 'next/link';
import Layout from '../components/Layout'
import Calc from '../components/Calc'

export default () => <div>
    <Layout header="Other" title="他のページです。">
        <Calc></Calc>
        <div>
            <Link href="/">
                <button>トップへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>