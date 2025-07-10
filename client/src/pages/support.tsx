import { Route, Switch } from "wouter";
import Contact from "@/components/contact";
import Documentation from "@/components/support/documentation";
import FAQ from "@/components/support/faq";
import Legal from "@/components/support/legal";

export default function Support() {
  return (
    <Switch>
      <Route path="/support/contact" component={Contact} />
      <Route path="/support/documentation" component={Documentation} />
      <Route path="/support/faq" component={FAQ} />
      <Route path="/support/legal" component={Legal} />
    </Switch>
  );
}