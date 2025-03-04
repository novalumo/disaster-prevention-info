export const metadata = {
  title: '管理画面 - 災害情報ポータル',
  description: '災害情報ポータルの管理画面です',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
