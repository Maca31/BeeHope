# Shadcn Component Quick Reference

## 🎯 Most Used Components

### Button
```tsx
import { Button } from './components/ui/button';

<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Ocean Impact</CardTitle>
    <CardDescription>Marine conservation statistics</CardDescription>
  </CardHeader>
  <CardContent>
    <p>50M tons of plastic removed</p>
  </CardContent>
  <CardFooter>
    <Button>Learn More</Button>
  </CardFooter>
</Card>
```

### Input
```tsx
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

<div>
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="your@email.com"
  />
</div>
```

### Dialog
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Support Ocean Conservation</DialogTitle>
    </DialogHeader>
    <p>Your support makes a difference.</p>
  </DialogContent>
</Dialog>
```

### Tabs
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

<Tabs defaultValue="impact">
  <TabsList>
    <TabsTrigger value="impact">Impact</TabsTrigger>
    <TabsTrigger value="donate">Donate</TabsTrigger>
    <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
  </TabsList>
  <TabsContent value="impact">Impact statistics...</TabsContent>
  <TabsContent value="donate">Donation form...</TabsContent>
  <TabsContent value="volunteer">Volunteer signup...</TabsContent>
</Tabs>
```

### Progress
```tsx
import { Progress } from './components/ui/progress';

<Progress value={75} className="w-full" />
```

### Badge
```tsx
import { Badge } from './components/ui/badge';

<Badge variant="default">New</Badge>
<Badge variant="secondary">Featured</Badge>
<Badge variant="destructive">Urgent</Badge>
<Badge variant="outline">Coming Soon</Badge>
```

### Alert
```tsx
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert';

<Alert>
  <AlertTitle>Climate Emergency</AlertTitle>
  <AlertDescription>
    Ocean temperatures are rising. Take action now.
  </AlertDescription>
</Alert>
```

### Select
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select donation amount" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="25">$25</SelectItem>
    <SelectItem value="50">$50</SelectItem>
    <SelectItem value="100">$100</SelectItem>
  </SelectContent>
</Select>
```

### Accordion
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is ocean acidification?</AccordionTrigger>
    <AccordionContent>
      Ocean acidification is the ongoing decrease in pH...
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How can I help?</AccordionTrigger>
    <AccordionContent>
      You can donate, volunteer, or reduce plastic usage...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Tooltip
```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>This explains ocean conservation</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Toast (Sonner)
```tsx
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

// Add to App.tsx
<Toaster />

// Usage in components
toast.success('Donation successful!');
toast.error('Something went wrong');
toast.info('New conservation project launched');
toast.warning('Your subscription expires soon');

// With action
toast('Ocean cleanup completed', {
  action: {
    label: 'View Results',
    onClick: () => console.log('View'),
  },
});
```

### Form (React Hook Form)
```tsx
import { useForm } from 'react-hook-form@7.55.0';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './components/ui/form';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

function DonationForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      amount: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Thank you for your donation!');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input type="number" placeholder="50" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Donate</Button>
      </form>
    </Form>
  );
}
```

### Sheet (Slide-in Panel)
```tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet';

<Sheet>
  <SheetTrigger asChild>
    <Button>Open Menu</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Ocean Conservation Menu</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      <nav className="flex flex-col gap-2">
        <a href="#about">About</a>
        <a href="#impact">Impact</a>
        <a href="#donate">Donate</a>
      </nav>
    </div>
  </SheetContent>
</Sheet>
```

### Popover
```tsx
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Info</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4>Marine Statistics</h4>
      <p>71% of Earth is ocean</p>
      <p>50% of oxygen from oceans</p>
    </div>
  </PopoverContent>
</Popover>
```

### Skeleton (Loading States)
```tsx
import { Skeleton } from './components/ui/skeleton';

<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-32 w-full rounded-lg" />
</div>
```

### Separator
```tsx
import { Separator } from './components/ui/separator';

<div>
  <h2>Ocean Conservation</h2>
  <Separator className="my-4" />
  <p>Protecting marine ecosystems...</p>
</div>
```

### Switch
```tsx
import { Switch } from './components/ui/switch';
import { Label } from './components/ui/label';

<div className="flex items-center space-x-2">
  <Switch id="newsletter" />
  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
</div>
```

### Checkbox
```tsx
import { Checkbox } from './components/ui/checkbox';

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">I agree to the terms</label>
</div>
```

### Radio Group
```tsx
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Label } from './components/ui/label';

<RadioGroup defaultValue="monthly">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="monthly" id="monthly" />
    <Label htmlFor="monthly">Monthly Donation</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="yearly" id="yearly" />
    <Label htmlFor="yearly">Yearly Donation</Label>
  </div>
</RadioGroup>
```

### Slider
```tsx
import { Slider } from './components/ui/slider';

<div>
  <Label>Donation Amount: ${value}</Label>
  <Slider
    defaultValue={[50]}
    max={500}
    step={10}
    onValueChange={(val) => setValue(val[0])}
  />
</div>
```

### Table
```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './components/ui/table';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Project</TableHead>
      <TableHead>Impact</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Coral Restoration</TableCell>
      <TableCell>500 reefs</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## 🎨 Ocean-Themed Examples

### Donation Card
```tsx
<Card className="overflow-hidden">
  <div className="h-48 bg-gradient-to-r from-primary to-accent" />
  <CardHeader>
    <CardTitle>Save Our Oceans</CardTitle>
    <CardDescription>Every donation makes waves of change</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label>Select Amount</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose amount" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="25">$25 - Feed 10 Sea Turtles</SelectItem>
          <SelectItem value="50">$50 - Clean 100m² of Ocean</SelectItem>
          <SelectItem value="100">$100 - Restore 1 Coral Reef</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="your@email.com" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Donate Now</Button>
  </CardFooter>
</Card>
```

### Impact Dashboard
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Card>
    <CardHeader>
      <CardTitle className="text-4xl text-primary">50M</CardTitle>
      <CardDescription>Tons of Plastic Removed</CardDescription>
    </CardHeader>
    <CardContent>
      <Progress value={75} />
      <p className="text-sm text-muted-foreground mt-2">75% of goal</p>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle className="text-4xl text-accent">1,200</CardTitle>
      <CardDescription>Coral Reefs Restored</CardDescription>
    </CardHeader>
    <CardContent>
      <Progress value={60} />
      <p className="text-sm text-muted-foreground mt-2">60% of goal</p>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle className="text-4xl text-primary">500K</CardTitle>
      <CardDescription>Volunteers Worldwide</CardDescription>
    </CardHeader>
    <CardContent>
      <Progress value={90} />
      <p className="text-sm text-muted-foreground mt-2">90% of goal</p>
    </CardContent>
  </Card>
</div>
```

### Newsletter Signup
```tsx
<Card className="bg-gradient-to-r from-primary/10 to-accent/10">
  <CardHeader>
    <CardTitle>Stay Updated</CardTitle>
    <CardDescription>
      Get the latest ocean conservation news
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex gap-2">
      <Input placeholder="Enter your email" type="email" />
      <Button>Subscribe</Button>
    </div>
  </CardContent>
</Card>
```

---

## 💡 Pro Tips

1. **Combine Components**: Mix and match for powerful UIs
2. **Use Variants**: Customize appearance with variant props
3. **Responsive**: All components work on mobile
4. **Accessible**: Built-in ARIA labels and keyboard navigation
5. **Customizable**: Edit `/components/ui/*.tsx` files to change defaults

---

Happy coding! 🌊
