using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;
using System;

public class TabNavigation : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void SwitchTab(int targetTabNum)
    {
        Debug.Log("Changing to scene: " + targetTabNum);
        SceneManager.LoadScene(targetTabNum);
    }
}
