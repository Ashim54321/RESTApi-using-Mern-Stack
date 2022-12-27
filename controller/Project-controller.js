const express = require("express");
const Project = require("../model/Project-model");

const addProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    return res
      .status(201)
      .json({
        status: "Success",
        messagae: "Project Successfully Added",
        data: project,
      });
  } catch (err) {
    res.json(err);
  }
};
const getProject = async (req, res) => {
  try {
    const project = await Project.find();
    if (!project) {
      return res
        .status(400)
        .json({ status: "Error", message: "Projects not Found" });
    }
    res.status(200).json({ status: "Success", data: project });
  } catch (err) {
    return res.json(err);
  }
};
const getSingleProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res
        .status(400)
        .json({ status: "Error", message: "Projects not Found" });
    }
    res.status(200).json({ status: "Success", data: project });
  } catch (err) {
    return res.json(err);
  }
};
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res
        .status(400)
        .json({ status: "Error", message: "Projects not Found" });
    }
    project = await Project.findByIdAndUpdate(req.params.id, req.body);
    return res.status(201).json({ staus: "Success", data: project });
  } catch (err) {
    return res.json(err);
  }
};
const removeProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndRemove(req.params.id);
    if (!project) {
      return res
        .status(400)
        .json({ status: "Error", message: "Projects not Found" });
    }
    res.status(200).json({ status: "Success", data: project });
  } catch (err) {
    return res.json(err);
  }
};

exports.addProject = addProject;
exports.getProject = getProject;
exports.getSingleProject = getSingleProject;
exports.updateProject= updateProject;
exports.removeProject = removeProject;