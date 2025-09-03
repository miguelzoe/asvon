"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Users,
  Home,
  HandHeart,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Star,
  Award,
  Target,
  Shield,
  ArrowRight,
  Globe,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    console.log("[v0] ASVON website loaded successfully")
    console.log("[v0] Button component imported:", typeof Button)
    console.log("[v0] Card components imported:", typeof Card, typeof CardContent)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el))
    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-asvon-gold shadow-lg">
                <Image src="/logo-asvon.jpg" alt="ASVON Logo" fill className="object-cover" priority />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-asvon-dark">ASVON</h1>
                <p className="text-xs text-asvon-green font-medium">Assistance - Solidarité</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                À Propos
              </a>
              <a href="#services" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                Nos Actions
              </a>
              <a href="#impact" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                Notre Impact
              </a>
              <a href="#testimonials" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                Témoignages
              </a>
              <a href="#contact" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex bg-asvon-gold hover:bg-asvon-gold/90 text-asvon-dark font-semibold shadow-lg">
                <Heart className="mr-2 h-4 w-4" />
                Faire un Don
              </Button>
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#about" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                  À Propos
                </a>
                <a href="#services" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                  Nos Actions
                </a>
                <a href="#impact" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                  Notre Impact
                </a>
                <a
                  href="#testimonials"
                  className="text-asvon-dark hover:text-asvon-green transition-colors font-medium"
                >
                  Témoignages
                </a>
                <a href="#contact" className="text-asvon-dark hover:text-asvon-green transition-colors font-medium">
                  Contact
                </a>
                <Button className="bg-asvon-gold hover:bg-asvon-gold/90 text-asvon-dark font-semibold">
                  <Heart className="mr-2 h-4 w-4" />
                  Faire un Don
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="pt-24 pb-20 px-4 asvon-gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 asvon-pattern-overlay opacity-20"></div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
              Ensemble pour
              <span className="text-asvon-gold block">Reconstruire des Vies</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
              ASVON - Association de Solidarité pour les Veuves, Veufs, Orphelins et Nécessiteux au Cameroun
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-asvon-gold hover:bg-asvon-gold/90 text-asvon-dark text-lg px-8 py-4 font-semibold shadow-2xl transform hover:scale-105 transition-all"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donnez Maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Users className="mr-2 h-5 w-5" />
                Devenir Bénévole
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-asvon-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-asvon-green" />
              </div>
              <div className="text-4xl font-bold text-asvon-green mb-2">500+</div>
              <div className="text-asvon-dark font-medium">Orphelins Soutenus</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-asvon-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-asvon-gold" />
              </div>
              <div className="text-4xl font-bold text-asvon-gold mb-2">300+</div>
              <div className="text-asvon-dark font-medium">Familles Aidées</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-asvon-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-asvon-green" />
              </div>
              <div className="text-4xl font-bold text-asvon-green mb-2">150+</div>
              <div className="text-asvon-dark font-medium">Bénévoles Actifs</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-asvon-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-asvon-gold" />
              </div>
              <div className="text-4xl font-bold text-asvon-gold mb-2">10+</div>
              <div className="text-asvon-dark font-medium">Années d&apos;Action</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h3 className="text-4xl font-bold text-asvon-dark mb-6">Notre Mission</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Apporter soutien, espoir et dignité aux plus vulnérables de notre société camerounaise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll bg-white">
              <CardHeader className="pb-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-asvon-green to-asvon-green/80 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-asvon-dark">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  Nous accompagnons avec empathie et bienveillance les personnes en situation de vulnérabilité.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll bg-white">
              <CardHeader className="pb-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-asvon-gold to-asvon-gold/80 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <HandHeart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-asvon-dark">Solidarité</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  Nous créons des liens de solidarité durables pour reconstruire des vies brisées.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll bg-white">
              <CardHeader className="pb-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-asvon-green to-asvon-green/80 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-asvon-dark">Éducation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  Nous investissons dans l&apos;éducation des orphelins pour leur offrir un avenir meilleur.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll bg-white">
              <CardHeader className="pb-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-asvon-gold to-asvon-gold/80 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Home className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-asvon-dark">Autonomie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  Nous aidons les familles à retrouver leur autonomie et leur dignité.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h3 className="text-4xl font-bold text-asvon-dark mb-6">Nos Actions Concrètes</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des programmes spécialisés pour transformer des vies au Cameroun
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll bg-white">
              <CardHeader>
                <CardTitle className="text-asvon-dark flex items-center">
                  <Award className="h-6 w-6 text-asvon-gold mr-2" />
                  Réalisations 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 120 bourses scolaires accordées</li>
                  <li>• 80 formations professionnelles</li>
                  <li>• 200 consultations médicales</li>
                  <li>• 50 microcrédits octroyés</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll bg-white">
              <CardHeader>
                <CardTitle className="text-asvon-dark flex items-center">
                  <Target className="h-6 w-6 text-asvon-gold mr-2" />
                  Objectifs 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 150 nouveaux orphelins</li>
                  <li>• 100 formations supplémentaires</li>
                  <li>• Extension à 2 nouvelles régions</li>
                  <li>• Centre de formation permanent</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll bg-white">
              <CardHeader>
                <CardTitle className="text-asvon-dark flex items-center">
                  <Shield className="h-6 w-6 text-asvon-gold mr-2" />
                  Transparence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Rapports annuels publics</li>
                  <li>• Audit externe indépendant</li>
                  <li>• 95% des fonds aux bénéficiaires</li>
                  <li>• Suivi personnalisé des cas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h3 className="text-4xl font-bold text-asvon-dark mb-6">Témoignages</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Les voix de ceux que nous avons pu aider grâce à votre soutien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-asvon-green/10 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-asvon-gold fill-current" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-asvon-dark">Marie K.</CardTitle>
                    <CardDescription>Veuve, mère de 3 enfants</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;Grâce à ASVON, j&apos;ai pu suivre une formation en couture. Aujourd&apos;hui, je peux subvenir aux besoins de
                  mes enfants avec dignité.&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-asvon-gold/10 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-asvon-gold fill-current" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-asvon-dark">Jean-Paul M.</CardTitle>
                    <CardDescription>Orphelin, étudiant</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;ASVON m&apos;a permis de continuer mes études. Je suis maintenant en dernière année d&apos;université grâce à
                  leur soutien.&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-asvon-green/10 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-asvon-gold fill-current" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-asvon-dark">Famille N.</CardTitle>
                    <CardDescription>Bénéficiaires d&apos;aide d&apos;urgence</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;Lors de notre période difficile, ASVON nous a apporté nourriture et espoir. Nous leur serons
                  éternellement reconnaissants.&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 px-4 asvon-gradient-bg text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h3 className="text-4xl font-bold mb-6">Notre Impact au Cameroun</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Des résultats concrets qui témoignent de notre engagement depuis 10 ans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Users className="h-10 w-10 text-asvon-gold" />
              </div>
              <div className="text-5xl font-bold text-asvon-gold mb-2">500+</div>
              <div className="text-white/90 font-medium">Orphelins Soutenus</div>
              <div className="text-sm text-white/70 mt-1">Éducation et soins</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Heart className="h-10 w-10 text-asvon-gold" />
              </div>
              <div className="text-5xl font-bold text-asvon-gold mb-2">300+</div>
              <div className="text-white/90 font-medium">Familles Aidées</div>
              <div className="text-sm text-white/70 mt-1">Veuves et veufs</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <HandHeart className="h-10 w-10 text-asvon-gold" />
              </div>
              <div className="text-5xl font-bold text-asvon-gold mb-2">150+</div>
              <div className="text-white/90 font-medium">Bénévoles Actifs</div>
              <div className="text-sm text-white/70 mt-1">Engagement communautaire</div>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Globe className="h-10 w-10 text-asvon-gold" />
              </div>
              <div className="text-5xl font-bold text-asvon-gold mb-2">5</div>
              <div className="text-white/90 font-medium">Régions Couvertes</div>
              <div className="text-sm text-white/70 mt-1">À travers le Cameroun</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h3 className="text-4xl font-bold text-asvon-dark mb-6">Contactez-Nous</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ensemble, nous pouvons faire la différence. N&apos;hésitez pas à nous contacter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-asvon-dark mb-4">Envoyez-nous un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-asvon-dark mb-2">Nom complet</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asvon-green focus:border-transparent transition-all"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-asvon-dark mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asvon-green focus:border-transparent transition-all"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-asvon-dark mb-2">Sujet</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asvon-green focus:border-transparent transition-all">
                        <option>Faire un don</option>
                        <option>Devenir bénévole</option>
                        <option>Parrainage</option>
                        <option>Information générale</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-asvon-dark mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asvon-green focus:border-transparent transition-all"
                        placeholder="Votre message..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-asvon-gold hover:bg-asvon-gold/90 text-asvon-dark font-semibold py-3">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Envoyer le Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 animate-on-scroll">
              <div>
                <h4 className="text-2xl font-bold text-asvon-dark mb-6">Nos Coordonnées</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-asvon-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-asvon-green" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-asvon-dark mb-1">Adresse</h5>
                      <p className="text-gray-600">
                        Quartier Mvog-Ada
                        <br />
                        Yaoundé, Cameroun
                        <br />
                        BP 1234 Yaoundé
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-asvon-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-asvon-gold" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-asvon-dark mb-1">Téléphone</h5>
                      <p className="text-gray-600">
                        +237 6XX XXX XXX
                        <br />
                        +237 2XX XXX XXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-asvon-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-asvon-green" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-asvon-dark mb-1">Email</h5>
                      <p className="text-gray-600">
                        contact@asvon.org
                        <br />
                        info@asvon.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-asvon-green/5 to-asvon-gold/5">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-asvon-dark mb-3">Horaires d&apos;ouverture</h5>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium">8h00 - 17h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-medium">8h00 - 12h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-asvon-dark text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-asvon-gold">
                  <Image src="/logo-asvon.jpg" alt="ASVON Logo" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-asvon-gold">ASVON</h4>
                  <p className="text-xs text-white/80">Assistance - Solidarité</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Association de Solidarité pour les Veuves, Veufs, Orphelins et Nécessiteux au Cameroun depuis 2014.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-asvon-gold text-asvon-gold hover:bg-asvon-gold hover:text-asvon-dark bg-transparent"
                >
                  <span className="sr-only">Facebook</span>f
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-asvon-gold text-asvon-gold hover:bg-asvon-gold hover:text-asvon-dark bg-transparent"
                >
                  <span className="sr-only">Twitter</span>t
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-asvon-gold text-asvon-gold hover:bg-asvon-gold hover:text-asvon-dark bg-transparent"
                >
                  <span className="sr-only">Instagram</span>i
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-asvon-gold text-asvon-gold hover:bg-asvon-gold hover:text-asvon-dark bg-transparent"
                >
                  <span className="sr-only">LinkedIn</span>in
                </Button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-asvon-gold mb-4">Liens Rapides</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#about" className="text-white/80 hover:text-asvon-gold transition-colors">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-asvon-gold transition-colors">
                    Nos Actions
                  </a>
                </li>
                <li>
                  <a href="#impact" className="text-white/80 hover:text-asvon-gold transition-colors">
                    Notre Impact
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white/80 hover:text-asvon-gold transition-colors">
                    Témoignages
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-asvon-gold transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-asvon-gold mb-4">Nos Actions</h5>
              <ul className="space-y-3 text-sm text-white/80">
                <li>Soutien aux Orphelins</li>
                <li>Aide aux Veuves & Veufs</li>
                <li>Assistance d&apos;Urgence</li>
                <li>Formation Professionnelle</li>
                <li>Microcrédits</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-asvon-gold mb-4">Comment Aider</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/80 hover:text-asvon-gold transition-colors">
                    Faire un Don
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-asvon-gold transition-colors">
                    Devenir Bénévole
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-asvon-gold transition-colors">
                    Parrainage
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-asvon-gold transition-colors">
                    Legs et Donations
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © 2024 ASVON. Tous droits réservés. | Association reconnue d&apos;utilité publique
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-asvon-gold transition-colors">
                  Mentions Légales
                </a>
                <a href="#" className="text-white/60 hover:text-asvon-gold transition-colors">
                  Politique de Confidentialité
                </a>
                <a href="#" className="text-white/60 hover:text-asvon-gold transition-colors">
                  Transparence
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}