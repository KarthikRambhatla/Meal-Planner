using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class SideMenu : MonoBehaviour
{
    private bool isMenuOpen = false;
    private Animation anim;
    public GameObject imgLib;
    public GameObject summaryMenu;

    // Start is called before the first frame update
    void Start()
    {
        anim = imgLib.GetComponent<Animation>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void MenuToggle(GameObject mealMenuBar) 
    {
        Debug.Log("BEFORE: Menu toggle bool is " + isMenuOpen);
        Debug.Log("Menu bar handle has been clicked!");
        Debug.Log(anim);
        isMenuOpen = !isMenuOpen;
        mealMenuBar.SetActive(!isMenuOpen);
        summaryMenu.SetActive(!isMenuOpen);
        if (isMenuOpen)
        {
            //play the slide out animation
            anim.Play("Slide_Out");
        }
        else
        {
            //play the slide in animation
            anim.Play("Slide_In");
        }
        Debug.Log("AFTER: Menu toggle bool is " + isMenuOpen);
    }
}
