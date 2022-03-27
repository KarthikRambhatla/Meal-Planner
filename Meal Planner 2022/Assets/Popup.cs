using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Popup : MonoBehaviour
{
    public GameObject popupModal;

    public void ShowPopup (){
        //show popup canvas to screen
        popupModal.SetActive(true);
        Debug.Log("Showing the confirmation popup");
    }

    public void ClosePopup() {
        //hides popup canvas from screen
        popupModal.SetActive(false);
        Debug.Log("Hiding the confirmation popup");
    }

    public void ClearPlate() {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        Debug.Log("The plate has been successfully cleared!");
    }
}
