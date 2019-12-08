import Link from 'next/link';
import Layout from '../components/Layout'

export default () => <div>
    <Layout header="Other" title="他のページです。">
        <div>
            <Link href="/">
                <button>トップへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>