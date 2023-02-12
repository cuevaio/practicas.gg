import JobOffer from "@/components/JobOffer"

const testJobOffer = {
  id: "896481CDFBEF87DD61373E686DCF3405",
  isAdHonorem: false,
  location: "Lima, Comas",
  publishedAt: {
    short: "10/06",
    long: "10 de junio de 2021",
  },
  title: "almacenero/a",
  detail: "Hola mundo",
  company: null,
}

const TestPage = () => {
  return (
    <div>
      <JobOffer {...testJobOffer} />
    </div>
  )
}

export default TestPage
