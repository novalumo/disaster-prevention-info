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
        当サイトでは正確な情報提供に努めておりますが、情報が古い場合や誤りがある場合がございます。
        最新かつ正確な情報は各自治体の公式サイトや公式SNSをご確認ください。
        情報の誤りや更新の提案は
        <Link
          href="https://github.com/novalumo/disaster-prevention-info/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:text-blue-600 mx-1"
        >
          GitHub Issues
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
