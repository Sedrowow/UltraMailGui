// src/services/mailService.ts

import { Mail } from '../api/models/Mail';
import { Item } from '../api/models/Item';

// Function to save a new mail
export const saveMail = async (mailData: any) => {
    const mail = new Mail(mailData);
    return await mail.save();
};

// Function to retrieve mails for a specific user
export const getMailsForUser = async (userId: string) => {
    return await Mail.find({ userId });
};

// Function to retrieve a specific mail by ID
export const getMailById = async (mailId: string) => {
    return await Mail.findById(mailId);
};

// Function to add items to a mail
export const addItemToMail = async (mailId: string, itemData: any) => {
    const item = new Item(itemData);
    await item.save();
    const mail = await Mail.findById(mailId);
    mail.items.push(item._id);
    return await mail.save();
};

// Function to retrieve items from a specific mail
export const getItemsFromMail = async (mailId: string) => {
    const mail = await Mail.findById(mailId).populate('items');
    return mail.items;
};