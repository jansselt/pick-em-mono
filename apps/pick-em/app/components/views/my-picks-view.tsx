import { Card, CardContent } from '@/ui/card';

export const MyPicksView = () => {
  return (
    <Card className="w-full h-full">
      <CardContent className="p-4">
        <span className="text-md">
          Make your selections for this week here.
        </span>
      </CardContent>
    </Card>
  );
};
