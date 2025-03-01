import Alert from './ui/Alert';
import Link from 'next/link';

export default function ContactAlert() {
  return (
    <Alert
      title="情報の正確性について"
      variant="error"
      dismissible={true}
      className="mx-auto max-w-6xl"
    >
      <p className="text-sm">
        当サイトに掲載されている情報は、最終更新時点で正確なものであることを確認していますが、
        情報の誤りを見つけられた場合や更新の提案は
        <Link
          href="https://github.com/novalumo/disaster-prevention-info/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:text-blue-600 mx-1"
        >
          GitHub Issues (PR歓迎)
        </Link>
        または
        <a
          href="mailto:contact@novalumo.com"
          className="underline font-medium hover:text-blue-600 mx-1"
        >
          contact@novalumo.com
        </a>
        までご連絡ください。
      </p>
    </Alert>
  );
}
