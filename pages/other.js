import Link from 'next/link';
import style from '../static/Style'

export default () => <div>
    {style}
    <h1>Next.js</h1>
    <p>他のページです。</p>
    <hr/>
    <div>
        <Link href="/">
            <button>トップへ戻る</button>
        </Link>
    </div>
</div>