package com.example.tpinf462;

import com.example.tpinf462.domaine.Voiture1;
import com.example.tpinf462.repository.VehiculeRepository;
import io.micrometer.common.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;
import java.util.Optional;

@SpringBootApplication
public class Tpinf462Application {
	private final Environment env;
	private final static Logger logger= LoggerFactory.getLogger(Tpinf462Application.class);


	public Tpinf462Application(Environment env) {
		this.env = env;
	}

	public static void main(String[] args) {
		SpringApplication app=new SpringApplication(Tpinf462Application.class);
		Environment env = app.run(args).getEnvironment();
		logApplicationStartup(env);

	}
	@Bean
	CommandLineRunner commandLineRunner(VehiculeRepository vehiculeRepository){
		return args ->{

			vehiculeRepository.save(Voiture1.builder()
					.make("Toyota")
					.model("Corolla")
					.yeaVehicule(new Date())
					.registratioNumberVehicule("ABC-1234")
					.rentalPriceVehicule(12000.0f)
					.build());
			vehiculeRepository.save(Voiture1.builder().make("Toyota").model("Corolla").yeaVehicule(new Date(120, 0, 1)).registratioNumberVehicule("ABC-1234").rentalPriceVehicule(12000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Honda").model("Civic").yeaVehicule(new Date(121, 1, 15)).registratioNumberVehicule("DEF-5678").rentalPriceVehicule(13000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Ford").model("Focus").yeaVehicule(new Date(122, 2, 10)).registratioNumberVehicule("GHI-9101").rentalPriceVehicule(11000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Chevrolet").model("Malibu").yeaVehicule(new Date(123, 3, 25)).registratioNumberVehicule("JKL-1213").rentalPriceVehicule(14000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Nissan").model("Altima").yeaVehicule(new Date(124, 4, 5)).registratioNumberVehicule("MNO-1415").rentalPriceVehicule(12500.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Hyundai").model("Elantra").yeaVehicule(new Date(125, 5, 20)).registratioNumberVehicule("PQR-1617").rentalPriceVehicule(11500.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Volkswagen").model("Jetta").yeaVehicule(new Date(126, 6, 30)).registratioNumberVehicule("STU-1819").rentalPriceVehicule(13500.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("BMW").model("3 Series").yeaVehicule(new Date(127, 7, 15)).registratioNumberVehicule("VWX-2021").rentalPriceVehicule(20000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Audi").model("A4").yeaVehicule(new Date(128, 8, 10)).registratioNumberVehicule("YZA-2223").rentalPriceVehicule(21000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Mercedes-Benz").model("C-Class").yeaVehicule(new Date(129, 9, 20)).registratioNumberVehicule("BCD-2425").rentalPriceVehicule(22000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Kia").model("Optima").yeaVehicule(new Date(130, 10, 25)).registratioNumberVehicule("EFG-2627").rentalPriceVehicule(12000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Mazda").model("6").yeaVehicule(new Date(131, 11, 5)).registratioNumberVehicule("HIJ-2829").rentalPriceVehicule(12500.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Subaru").model("Impreza").yeaVehicule(new Date(132, 0, 10)).registratioNumberVehicule("KLM-3031").rentalPriceVehicule(13000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Tesla").model("Model 3").yeaVehicule(new Date(133, 1, 15)).registratioNumberVehicule("NOP-3233").rentalPriceVehicule(35000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Volvo").model("S60").yeaVehicule(new Date(134, 2, 20)).registratioNumberVehicule("QRS-3435").rentalPriceVehicule(24000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Jaguar").model("XE").yeaVehicule(new Date(135, 3, 25)).registratioNumberVehicule("TUV-3637").rentalPriceVehicule(26000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Lexus").model("IS").yeaVehicule(new Date(136, 4, 5)).registratioNumberVehicule("WXY-3839").rentalPriceVehicule(28000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Infiniti").model("Q50").yeaVehicule(new Date(137, 5, 10)).registratioNumberVehicule("ZAB-4041").rentalPriceVehicule(27000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Acura").model("TLX").yeaVehicule(new Date(138, 6, 15)).registratioNumberVehicule("CDE-4243").rentalPriceVehicule(25000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Cadillac").model("ATS").yeaVehicule(new Date(139, 7, 20)).registratioNumberVehicule("FGH-4445").rentalPriceVehicule(23000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Alfa Romeo").model("Giulia").yeaVehicule(new Date(140, 8, 25)).registratioNumberVehicule("IJK-4647").rentalPriceVehicule(26000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Genesis").model("G70").yeaVehicule(new Date(141, 9, 5)).registratioNumberVehicule("LMN-4849").rentalPriceVehicule(22000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Porsche").model("Macan").yeaVehicule(new Date(142, 10, 10)).registratioNumberVehicule("OPQ-5051").rentalPriceVehicule(60000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Land Rover").model("Discovery").yeaVehicule(new Date(143, 11, 15)).registratioNumberVehicule("RST-5253").rentalPriceVehicule(55000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Jeep").model("Grand Cherokee").yeaVehicule(new Date(144, 0, 20)).registratioNumberVehicule("UVW-5455").rentalPriceVehicule(40000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Toyota").model("Camry").yeaVehicule(new Date(145, 1, 25)).registratioNumberVehicule("XYZ-5657").rentalPriceVehicule(22000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Honda").model("Accord").yeaVehicule(new Date(146, 2, 5)).registratioNumberVehicule("ABC-5859").rentalPriceVehicule(23000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Ford").model("Mustang").yeaVehicule(new Date(147, 3, 10)).registratioNumberVehicule("DEF-6061").rentalPriceVehicule(32000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Chevrolet").model("Camaro").yeaVehicule(new Date(148, 4, 15)).registratioNumberVehicule("GHI-6263").rentalPriceVehicule(33000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Nissan").model("Maxima").yeaVehicule(new Date(149, 5, 20)).registratioNumberVehicule("JKL-6465").rentalPriceVehicule(27000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Hyundai").model("Sonata").yeaVehicule(new Date(150, 6, 25)).registratioNumberVehicule("MNO-6667").rentalPriceVehicule(21000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Volkswagen").model("Passat").yeaVehicule(new Date(151, 7, 5)).registratioNumberVehicule("PQR-6869").rentalPriceVehicule(24000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("BMW").model("5 Series").yeaVehicule(new Date(152, 8, 10)).registratioNumberVehicule("STU-7071").rentalPriceVehicule(45000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Audi").model("A6").yeaVehicule(new Date(153, 9, 15)).registratioNumberVehicule("VWX-7273").rentalPriceVehicule(47000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Mercedes-Benz").model("E-Class").yeaVehicule(new Date(154, 10, 20)).registratioNumberVehicule("YZA-7475").rentalPriceVehicule(48000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Kia").model("Stinger").yeaVehicule(new Date(155, 11, 25)).registratioNumberVehicule("BCD-7677").rentalPriceVehicule(38000.0f).build());
			vehiculeRepository.save(Voiture1.builder().make("Mazda").model("CX-5").yeaVehicule(new Date(156, 0, 5)).registratioNumberVehicule("EFG-7879").rentalPriceVehicule(26000.0f).build());



		};
	}
	private static void logApplicationStartup(Environment env) {
		String protocol = Optional.ofNullable(env.getProperty("server.ssl.key-store")).map(key -> "https").orElse("http");
		String serverPort = env.getProperty("server.port");
		String contextPath = Optional
				.ofNullable(env.getProperty("server.servlet.context-path"))
				.filter(StringUtils::isNotBlank)
				.orElse("/");
		String hostAddress = "localhost";
		try {
			hostAddress = InetAddress.getLocalHost().getHostAddress();
			logger.info("ip {}",hostAddress);
		} catch (UnknownHostException e) {
			logger.warn("The host name could not be determined, using `localhost` as fallback");
		}
		logger.info(
				"\n----------------------------------------------------------\n\t" +
						"Application '{}' is running! Access URLs:\n\t" +
						"Local: \t\t{}://localhost:{}{}\n\t" +
						"External: \t{}://{}:{}{}\n\t" +
						"Profile(s): \t{}\n----------------------------------------------------------",
				env.getProperty("spring.application.name"),
				protocol,
				serverPort,
				contextPath,
				protocol,
				hostAddress,
				serverPort,
				contextPath,
				env.getActiveProfiles().length == 0 ? env.getDefaultProfiles() : env.getActiveProfiles()
		);
	}
}
