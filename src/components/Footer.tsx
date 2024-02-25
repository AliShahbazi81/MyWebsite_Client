import "./../app/css/footer.scss"
import ReferenceCard from "@/components/reference/ReferenceCard";

export default function Footer() {
	return (
		<div className={'footerEnv'}>
			{/* Social links and icons */}
			<div className={'socialEnv'}>
				<p>Hey there</p>
			</div>
			{/* References */}
			<div className={'referenceEnv'}>
				<ReferenceCard
					profImageUrl={"ProfMahdiFiroozjaei"}
					profName={"Prof. Mahdi Firoozjaei"}
					profRole={"Professor"}
					profText={"Ali Shahbazi was one of my students at the University of Windsor. He has passed two courses with me, namely Advanced Computing Concept and Internship Project. I know him since Sep. 2022.Ali showed himself as a talent student. I found him a hard working student by contributing and presenting a considerable project in Stock Market Analysis.I have found Ali a well organized and hardworking person and do recommend him for consideration."}
					profUniversity={"University of Windsor"} 
					profLinkedInUrl={"https://www.linkedin.com/in/mahdi-d-firoozjaei-85b58a42/"}/>
				<ReferenceCard
					profImageUrl={"ProfUsamaMir"}
					profName={"Prof. Usama Mir"}
					profRole={"Professor"}
					profText={"It gives me immense pleasure to recommend Ali Shahbazi. Ali was my student in Master of Applied Computing (MAC) program at University of Windsor (UoW). I found him to be a top student in the class. He is very attentive during his classes and asks relevant questions. He achieved good scores in my course. He has excellent written and verbal communication skills, is extremely organized, reliable, and computer literate. Therefore, I strongly recommend Ali for any related Internship and Job opportunities."}
					profUniversity={"University of Windsor"} 
					profLinkedInUrl={"https://www.linkedin.com/in/usama-mir-phd-0892932b/"}/>
			</div>
			<div className={'referenceEnv'}>
				<ReferenceCard
					profImageUrl={"AtefehGilvari"}
					profName={"Atefeh Gilvari"}
					profRole={"PhD Student"}
					profText={"Ali was an exceptional student in our advanced software engineering course. His strong problem-solving and teamwork skills make him a standout performer."}
					profUniversity={"University of Windsor"}
					profLinkedInUrl={"https://www.linkedin.com/in/atefeh-gilvari-122a76256/"}/>
				<ReferenceCard
					profImageUrl={"ArashShabbeh"}
					profName={"Arash Shabbeh"}
					profRole={"Senior .NET Developer"}
					profText={"Ali is one of the most talented, hard-working, fast learners and trustworthy colleagues I've ever had. I believe cooperating with Ali on any project could undoubtedly have many benefits."}
					profUniversity={""} 
					profLinkedInUrl={"https://www.linkedin.com/in/arash-shabbeh/"}/>
			</div>
		</div>
	)
}