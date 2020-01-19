import Link from 'next/link';
import Layout from '../components/Layout'
// import Calc from '../components/Calc'
import FireFind from '../components/FireFind'

export default () => <div>
    <Layout header="Other" title="他のページです。">
        <FireFind></FireFind>
        <div>
            <Link href="/">
                <button>トップへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>