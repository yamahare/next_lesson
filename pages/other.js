import Link from 'next/link';
import Layout from '../components/Layout'
import Counter from '../components/Counter'

export default () => <div>
    <Layout header="Other" title="他のページです。">
        <Counter></Counter>
        <div>
            <Link href="/">
                <button>トップへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>