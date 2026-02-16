import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, lastname, email, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    // 📩 Mail que toi tu reçois
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: process.env.USER_EMAIL,
      replyTo: email,
      subject: `DEMANDE DE SERVICE PAR ${name} ${lastname ?? "- {client}"}`,
      text: `
        Nom: ${name} ${lastname ?? "- {client}"}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    // 📩 Mail de confirmation pour le visiteur
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: "Confirmation de réception",
      text: `Bonjour ${name},\n\nMerci pour votre message ! Nous vous contacterons bientôt.\n\nCordialement,\nL'équipe.`,
    });

    return NextResponse.json({ message: "Votre message a été envoyé avec succès ✅" });
  } catch (error) {
    console.error("Erreur d'envoi email:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}
