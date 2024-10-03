import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../src/app/firebase';

// POST: create new company
async function createCompany(req:NextApiRequest, res:NextApiResponse) {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    // add new companie in Firestore
    const docRef = await addDoc(collection(db, "companies"), {
      name,
      description,
      createdAt: new Date().toISOString(),
    });

    return res.status(201).json({ id: docRef.id, message: "Company created" });
  } catch (error) {
    return res.status(500).json({ message: "Error creating company", error });
  }
}

// GET: all companies list
async function getCompanies(req: NextApiRequest, res: NextApiResponse) {
  try {
    const querySnapshot = await getDocs(collection(db, "companies"));
    const companies = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json(companies);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching companies", error });
  }
}

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    return createCompany(req, res);
  } else if (req.method === 'GET') {
    return getCompanies(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
