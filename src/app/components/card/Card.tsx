import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AlertDialogOpenging from "../alertDialog/AlertDialog";

interface CardOpengingProps {
  title?: string;
  description?: string
  content?: string
  footer?: string
}

export default function CardOpenging({title, description, content, footer}: CardOpengingProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <AlertDialogOpenging />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  );
}
