import type { ReactNode } from 'react';
import Card from './Card';
import Heading from './Heading';
import Button from './Button';
import List, { ListItem } from './List';

type InfoCardProps = {
  title: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  titleColor?: 'default' | 'primary' | 'secondary';
  content?: string;
  listItems?: string[];
  buttonText?: string;
  buttonOnClick?: () => void;
  children?: ReactNode;
  className?: string;
};

export default function InfoCard({
  title,
  titleAs = 'h2',
  titleColor = 'primary',
  content,
  listItems,
  buttonText,
  buttonOnClick,
  children,
  className,
}: InfoCardProps) {
  return (
    <Card className={className}>
      <Heading as={titleAs} color={titleColor} className="mb-4">
        {title}
      </Heading>

      {content && <p className="text-gray-600 mb-4">{content}</p>}

      {listItems && listItems.length > 0 && (
        <List className="mb-4">
          {listItems.map((item) => (
            <ListItem key={`item-${item}`}>{item}</ListItem>
          ))}
        </List>
      )}

      {children}

      {buttonText && (
        <Button className="mt-4" onClick={buttonOnClick}>
          {buttonText}
        </Button>
      )}
    </Card>
  );
}
