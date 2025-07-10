import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Users, Server, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export default function ROICalculator() {
  const [employees, setEmployees] = useState([50]);
  const [currentItCosts, setCurrentItCosts] = useState("");
  const [hasOwnItTeam, setHasOwnItTeam] = useState(false);
  const [itTeamSize, setItTeamSize] = useState([1]);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const employeeCount = employees[0];
    const monthlyCosts = parseFloat(currentItCosts) || 0;
    const teamSize = hasOwnItTeam ? itTeamSize[0] : 0;

    // Estimation basée sur nos données moyennes
    const currentAnnualCosts = monthlyCosts * 12;
    const itTeamCosts = teamSize * 4500 * 12; // Coût moyen employé IT/mois
    const totalCurrentCosts = currentAnnualCosts + itTeamCosts;

    // Coût estimé avec Zynlix (basé sur notre grille tarifaire)
    let zynlixMonthlyCost = 0;
    if (employeeCount <= 20) {
      zynlixMonthlyCost = 150 * employeeCount;
    } else if (employeeCount <= 50) {
      zynlixMonthlyCost = 130 * employeeCount;
    } else if (employeeCount <= 100) {
      zynlixMonthlyCost = 110 * employeeCount;
    } else {
      zynlixMonthlyCost = 95 * employeeCount;
    }

    const zynlixAnnualCost = zynlixMonthlyCost * 12;
    const annualSavings = totalCurrentCosts - zynlixAnnualCost;
    const savingsPercentage = totalCurrentCosts > 0 ? (annualSavings / totalCurrentCosts) * 100 : 0;
    const paybackMonths = zynlixAnnualCost > 0 ? Math.max(1, Math.round((zynlixAnnualCost * 0.1) / (annualSavings / 12))) : 1;

    return {
      currentAnnualCosts: totalCurrentCosts,
      zynlixAnnualCost,
      annualSavings: Math.max(0, annualSavings),
      savingsPercentage: Math.max(0, savingsPercentage),
      paybackMonths,
      zynlixMonthlyCost
    };
  };

  const handleCalculate = () => {
    if (currentItCosts && parseFloat(currentItCosts) > 0) {
      setShowResults(true);
    }
  };

  const results = calculateROI();

  const benefits = [
    "Supervision 24/7 incluse",
    "Support technique expert",
    "Sauvegardes automatisées", 
    "Sécurité renforcée",
    "Mises à jour automatiques",
    "Reporting mensuel détaillé"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Calculateur ROI Infogérance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez en 2 minutes les économies potentielles que vous pourriez réaliser 
            en confiant votre IT à Zynlix.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Informations sur votre entreprise</span>
              </CardTitle>
              <CardDescription>
                Quelques questions pour personnaliser votre estimation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">
                  Nombre d'employés : {employees[0]}
                </Label>
                <div className="mt-2">
                  <Slider
                    value={employees}
                    onValueChange={setEmployees}
                    max={200}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5</span>
                    <span>200+</span>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="currentCosts" className="text-base font-medium">
                  Coûts IT mensuels actuels (€)
                </Label>
                <Input
                  id="currentCosts"
                  type="number"
                  placeholder="ex: 3500"
                  value={currentItCosts}
                  onChange={(e) => setCurrentItCosts(e.target.value)}
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Incluez : licences, maintenance, serveurs, réseau...
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id="hasItTeam"
                    checked={hasOwnItTeam}
                    onChange={(e) => setHasOwnItTeam(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="hasItTeam" className="text-base font-medium">
                    Vous avez une équipe IT interne
                  </Label>
                </div>
                
                {hasOwnItTeam && (
                  <div className="mt-3">
                    <Label className="text-sm">
                      Nombre de personnes dans l'équipe IT : {itTeamSize[0]}
                    </Label>
                    <div className="mt-2">
                      <Slider
                        value={itTeamSize}
                        onValueChange={setItTeamSize}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full bg-primary hover:bg-accent"
                disabled={!currentItCosts || parseFloat(currentItCosts) <= 0}
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculer mes économies
              </Button>
            </CardContent>
          </Card>

          {/* Résultats */}
          <Card className={`transition-all duration-500 ${showResults ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span>Estimation de vos économies</span>
              </CardTitle>
              <CardDescription>
                Calcul basé sur nos tarifs moyens et retours clients
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {showResults ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {results.zynlixMonthlyCost.toLocaleString()}€
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Coût mensuel Zynlix
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {results.annualSavings.toLocaleString()}€
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Économies annuelles
                      </div>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {results.savingsPercentage.toFixed(0)}%
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      de réduction de vos coûts IT
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Inclus dans notre prestation :
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Retour sur investissement estimé</span>
                      <Badge variant="outline">
                        {results.paybackMonths} mois
                      </Badge>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Server className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Complétez le formulaire pour voir votre estimation personnalisée
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {showResults && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ces estimations vous intéressent ? Obtenez un devis personnalisé gratuit.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <DollarSign className="w-4 h-4 mr-2" />
              Demander un devis détaillé
            </Button>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            * Estimation basée sur nos tarifs standards et retours clients moyens. 
            Les économies réelles peuvent varier selon votre contexte spécifique.
          </p>
        </div>
      </div>
    </section>
  );
} 