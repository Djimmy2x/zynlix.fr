import { Route, Switch } from "wouter";
import About from "@/components/about";
import Team from "@/components/company/team";
import Careers from "@/components/company/careers";
import News from "@/components/company/news";

export default function Company() {
  return (
    <Switch>
      <Route path="/company/about" component={About} />
      <Route path="/company/team" component={Team} />
      <Route path="/company/careers" component={Careers} />
      <Route path="/company/news" component={News} />
    </Switch>
  );
}